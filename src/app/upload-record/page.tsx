import { Suspense } from 'react';
import UploadForm from './UploadForm';

export default function UploadRecord() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center">
        <div>Loading...</div>
      </div>
    }>
      <UploadForm />
    </Suspense>
  );
}