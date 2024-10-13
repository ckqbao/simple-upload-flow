import { Input } from '@repo/ui/components/ui/input';

type UploadButtonProps = {
  onUpload?: (file: File) => void;
};

export function UploadButton({ onUpload }: UploadButtonProps) {
  return (
    <>
      <Input
        className="hidden"
        id="upload-file"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onUpload?.(file);
        }}
        type="file"
      />
      <label className="primary-gradient-btn" htmlFor="upload-file">
        Upload my photo
      </label>
    </>
  );
}
