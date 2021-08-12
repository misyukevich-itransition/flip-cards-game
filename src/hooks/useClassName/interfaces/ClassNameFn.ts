import { ClassDictionary } from '../../../types/ClassDictionary';

export interface ClassNameFn {
  (): string;
  (element: string): string;
  (modifiers: ClassDictionary): string;
  (element: string, modifiers: ClassDictionary): string;
}
