import { h, render } from 'vue';
import OptionsDialog from './options-dialog.vue';

export type FuncDialogType = 'alert' | 'confirm' | 'prompt' | 'options';

export interface UseDialogOptions {
  type?: FuncDialogType;
  onConfirm?: () => any;
  onClose?: () => any;
}

export const useDialog = (options?: UseDialogOptions) => {

  const close = () => {
    /**
     * 跟踪 VNode -> null
     */
    options?.onClose?.();
    render(null, document.body);
  };

  const open = () => {
    render(h(OptionsDialog, {
      close
    }), document.body);
  };

  return { open, close, confirm };
};