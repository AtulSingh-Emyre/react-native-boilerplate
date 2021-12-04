import {createRef, MutableRefObject} from 'react';

export const rootNavigationRef = createRef<any>();

const isRootNavigationReadyRef: MutableRefObject<boolean | null> = createRef();

export const setRootNavigationReady = (value: boolean) => {
  isRootNavigationReadyRef.current = value;
};

export function navigate(name: any, params: any) {
  if (isRootNavigationReadyRef.current && rootNavigationRef.current) {
    rootNavigationRef.current?.navigate(name, params);
  }
}
