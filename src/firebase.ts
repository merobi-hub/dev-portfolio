import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  projectId: "merobi-content",
  storageBucket: "gs://merobi-content.firebasestorage.app",
};

export const storage = getStorage();
