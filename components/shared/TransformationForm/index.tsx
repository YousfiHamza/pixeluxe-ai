'use client';

// LIBRARY IMPORTS
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getCldImageUrl } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { Download, RotateCcw, Hammer } from 'lucide-react';

// COMPONENTS IMPORTS
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import TransformedImage from '@/components/shared/TransformedImage';
import { CustomField } from '@/components/shared/TransformationForm/CustomField';
import MediaUploader from '@/components/shared/MediaUploader';

// UTILS IMPORTS
import {
  aspectRatioOptions,
  formDefaultValues,
  transformationTypes,
} from '@/constants';
import { AspectRatioKey, debounce, deepMergeObjects } from '@/lib/utils';
import { addImage, updateImage } from '@/lib/actions/image.action';

export const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
});

export function TransformationForm({
  action,
  data = null,
  userId,
  type,
  config = null,
}: TransformationFormProps) {
  const transformationType = transformationTypes[type];
  const [image, setImage] = useState(data);
  const [newTransformation, setNewTransformation] =
    useState<Transformations | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  const [transformationConfig, setTransformationConfig] = useState(config);
  const router = useRouter();

  const canSaveImage =
    !isSubmitting && image?.publicId && transformationConfig && !isTransforming;

  const initialValues =
    data && action === 'Update'
      ? {
          title: data?.title,
          aspectRatio: data?.aspectRatio,
          color: data?.color,
          prompt: data?.prompt,
          publicId: data?.publicId,
        }
      : formDefaultValues;

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    if (canSaveImage && (data || image)) {
      const transformationUrl = getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig,
      });

      const imageData = {
        title: values.title,
        publicId: image?.publicId,
        transformationType: type,
        width: image?.width,
        height: image?.height,
        config: transformationConfig,
        secureURL: image?.secureURL,
        transformationURL: transformationUrl,
        aspectRatio: values.aspectRatio,
        prompt: values.prompt,
        color: values.color,
      };

      if (action === 'Add') {
        try {
          const newImage = await addImage({
            image: imageData,
            userId,
            path: '/dashboard/home',
          });

          if (newImage) {
            form.reset();
            setImage(data);
            router.push(`/dashboard/transformations/${newImage._id}`);
          }
        } catch (error) {
          console.log(error);
        }
      }

      if (action === 'Update') {
        try {
          const updatedImage = await updateImage({
            image: {
              ...imageData,
              _id: data._id,
            },
            userId,
            path: `/dashboard/transformations/${data._id}`,
          });

          if (updatedImage) {
            router.push(`/dashboard/transformations/${updatedImage._id}`);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    setIsSubmitting(false);
  }

  const onSelectFieldHandler = (
    value: string,
    onChangeField: (value: string) => void,
  ) => {
    const imageSize = aspectRatioOptions[value as AspectRatioKey];

    setImage((prevState: any) => ({
      ...prevState,
      aspectRatio: imageSize.aspectRatio,
      width: imageSize.width,
      height: imageSize.height,
    }));

    setNewTransformation(transformationType.config);

    return onChangeField(value);
  };

  const onInputChangeHandler = (
    fieldName: string,
    value: string,
    type: string,
    onChangeField: (value: string) => void,
  ) => {
    debounce(() => {
      setNewTransformation((prevState: any) => ({
        ...prevState,
        [type]: {
          ...prevState?.[type],
          [fieldName === 'prompt' ? 'prompt' : 'to']: value,
        },
      }));
    }, 1000)();

    return onChangeField(value);
  };

  const onTransformHandler = async () => {
    setIsTransforming(true);

    setTransformationConfig(
      deepMergeObjects(newTransformation, transformationConfig),
    );

    setNewTransformation(null);
  };

  useEffect(() => {
    if (image && (type === 'restore' || type === 'removeBackground')) {
      setNewTransformation(transformationType.config);
    }
  }, [image, transformationType.config, type]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomField
          control={form.control}
          name="title"
          formLabel="Image Title"
          className="w-full"
          render={({ field }) => (
            <Input {...field} className="input-field" required />
          )}
        />

        {type === 'fill' && (
          <CustomField
            control={form.control}
            name="aspectRatio"
            formLabel="Aspect Ratio"
            className="w-full"
            render={({ field }) => (
              <Select
                onValueChange={value =>
                  onSelectFieldHandler(value, field.onChange)
                }
                value={field.value}
              >
                <SelectTrigger className="select-field">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(aspectRatioOptions).map(key => (
                    <SelectItem key={key} value={key} className="select-item">
                      {aspectRatioOptions[key as AspectRatioKey].label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        )}

        {(type === 'remove' || type === 'recolor') && (
          <div className="prompt-field">
            <CustomField
              control={form.control}
              name="prompt"
              formLabel={
                type === 'remove' ? 'Object to remove' : 'Object to recolor'
              }
              className="w-full"
              render={({ field }) => (
                <Input
                  required
                  value={field.value}
                  className="input-field"
                  onChange={e =>
                    onInputChangeHandler(
                      'prompt',
                      e.target.value,
                      type,
                      field.onChange,
                    )
                  }
                />
              )}
            />

            {type === 'recolor' && (
              <CustomField
                control={form.control}
                name="color"
                formLabel="Replacement Color"
                className="w-full"
                render={({ field }) => (
                  <Input
                    required
                    value={field.value}
                    className="input-field"
                    onChange={e =>
                      onInputChangeHandler(
                        'color',
                        e.target.value,
                        'recolor',
                        field.onChange,
                      )
                    }
                  />
                )}
              />
            )}
          </div>
        )}

        <div className="media-uploader-field">
          <CustomField
            control={form.control}
            name="publicId"
            className="flex size-full flex-col"
            render={({ field }) => (
              <MediaUploader
                onValueChange={field.onChange}
                setImage={setImage}
                publicId={field.value}
                image={image}
                type={type}
                userId={userId}
              />
            )}
          />

          <TransformedImage
            image={image}
            type={type}
            title={form.getValues().title}
            isTransforming={isTransforming}
            setIsTransforming={setIsTransforming}
            transformationConfig={transformationConfig}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button
            type="button"
            className="submit-button capitalize"
            disabled={isTransforming || newTransformation === null || !image}
            onClick={onTransformHandler}
          >
            {isTransforming ? (
              'Transforming...'
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Hammer />
                Apply Transformations
              </div>
            )}
          </Button>
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <Button
              type="submit"
              className="cta-button bg-green-600 capitalize"
              disabled={!canSaveImage}
            >
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Download />
                  Save Image
                </div>
              )}
            </Button>
            {action === 'Add' && (
              <Button
                className="cta-button bg-red-500 capitalize"
                onClick={() => setImage(null)}
                disabled={!image}
              >
                <div className="flex items-center justify-center gap-2">
                  <RotateCcw />
                  New Image
                </div>
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
