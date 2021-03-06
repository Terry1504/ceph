import { Injectable } from '@angular/core';

import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class TextToDownloadService {
  constructor() {}

  download(downloadText: string, filename?: string) {
    saveAs(new Blob([downloadText]), filename);
  }
}
