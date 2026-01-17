/// <reference types="react-scripts" />
declare module 'firebase/firebase-app';
declare module 'firebase/firebase-analytics';
declare var gtag: Gtag.Gtag;
declare global {
    interface Window {
        dataLayer: any;
    }
}
export {};
