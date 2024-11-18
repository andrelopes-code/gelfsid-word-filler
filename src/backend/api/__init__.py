from backend.api.template_filler import TemplateFiller
from src.backend.api.clipboard import ClipboardAPI
from src.backend.api.files import FilesAPI
from src.backend.api.swal import SwalAPI
from src.backend.api.window import WindowAPI


class API:
    def start(self, window):
        self.swal = SwalAPI(window)
        self.files = FilesAPI(window)
        self.window = WindowAPI(window)
        self.clipboard = ClipboardAPI()
        self.template = TemplateFiller(window, self.swal)
