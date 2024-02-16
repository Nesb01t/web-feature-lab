import { h, render } from 'vue';
import OptionsDialog from './options-dialog.vue';

type FuncDialogType = 'alert' | 'confirm' | 'prompt' | 'options';

interface UseDialogOptions {
  type?: FuncDialogType;
  onConfirm?: () => any;
  onClose?: () => any;
}

export const useDialog = (options?: UseDialogOptions) => {
  const open = async () => {
    return new Promise((resolve) => {
      render(h(OptionsDialog, {
        close: () => {
          render(null, document.body);
          resolve(options?.onClose?.());
        }
      }), document.body);
    });
  };

  return { open };
};
