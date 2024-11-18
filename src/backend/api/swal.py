import json

from src.backend.api.base import BaseAPI


class SwalAPI(BaseAPI):
    """API for SweetAlert2"""

    def _execute_swal(self, function_name, *args):
        args_json = json.dumps(args)
        args_str = args_json[1:-1]

        js_code = f'SwalUtils.{function_name}({args_str})'
        result = self._window.evaluate_js(js_code)
        return result

    def success(
        self,
        message,
        title='SUCESSO',
    ):
        return self._execute_swal(
            'success',
            message,
            title,
        )

    def error(
        self,
        message,
        title='UM ERRO OCORREU',
    ):
        return self._execute_swal(
            'error',
            message,
            title,
        )

    def confirm(
        self,
        message,
        title='CONFIRMAÇÃO',
        confirm_text='Sim',
        cancel_text='Não',
    ):
        return self._execute_swal(
            'confirm',
            message,
            title,
            confirm_text,
            cancel_text,
        )

    def warning(
        self,
        message,
        title='ATENÇÃO',
    ):
        return self._execute_swal(
            'warning',
            message,
            title,
        )

    def toast(
        self,
        message,
        icon='success',
        position='top-end',
    ):
        return self._execute_swal(
            'toast',
            message,
            icon,
            position,
        )

    def loading(
        self,
        message='Carregando...',
    ):
        return self._execute_swal(
            'loading',
            message,
        )

    def prompt(
        self,
        message,
        title='Digite',
        input_placeholder='',
    ):
        return self._execute_swal(
            'prompt',
            message,
            title,
            input_placeholder,
        )

    def html(
        self,
        html_content,
        title='',
    ):
        return self._execute_swal(
            'html',
            html_content,
            title,
        )

    def delete(
        self,
        message='Esta ação não poderá ser revertida!',
        title='Tem certeza?',
    ):
        return self._execute_swal(
            'delete',
            message,
            title,
        )

    def auto_close(
        self,
        message,
        title='',
        timer=2000,
    ):
        return self._execute_swal(
            'autoClose',
            message,
            title,
            timer,
        )

    def close(self):
        self._window.evaluate_js('Swal.close()')
