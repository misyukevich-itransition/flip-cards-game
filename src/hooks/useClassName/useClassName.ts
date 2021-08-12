import classNames from 'classnames';
import mapKeys from 'lodash/mapKeys';
import { useCallback } from 'react';
import { Optional } from '../../types/Optional';
import { ClassNameFn } from './interfaces/ClassNameFn';
import { ClassDictionary } from '../../types/ClassDictionary';

export function useClassName(
  component: string,
  additionalComponent?: string,
): ClassNameFn {
  return useCallback<ClassNameFn>(
    (
      elementOrModifiers?: string | ClassDictionary,
      optionalModifiers?: ClassDictionary,
    ) => {
      const block = classNames(component);
      let element: Optional<string>;
      let modifiers;

      let modifiersDictionary: ClassDictionary | null = null;

      if (typeof elementOrModifiers === 'string') {
        element = `${component}__${elementOrModifiers}`;
      }

      if (typeof elementOrModifiers === 'object') {
        modifiersDictionary = elementOrModifiers;
      } else if (typeof optionalModifiers === 'object') {
        modifiersDictionary = optionalModifiers;
      }

      if (modifiersDictionary) {
        modifiers = mapKeys(
          modifiersDictionary,
          (value, modifier) => `${element || block}--${modifier}`,
        );
      }

      return element
        ? classNames(element, modifiers)
        : classNames(block, modifiers, additionalComponent);
    },
    [component, additionalComponent],
  );
}
