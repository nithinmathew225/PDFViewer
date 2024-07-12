import { Routes } from '@angular/router';
import { AdobePdfViewerComponent } from './adobe-pdf-viewer/adobe-pdf-viewer.component';
import { Ng2PdfViewerComponent } from './ng2-pdf-viewer/ng2-pdf-viewer.component';

export const routes: Routes = [
    {
      path: '',
      component: AdobePdfViewerComponent,
      title: 'Adobe-dc-viewer',
    },
    {
        path: 'adobe-pdf-viewer',
        component: AdobePdfViewerComponent,
        title: 'Adobe-dc-viewer',
      },
    {
      path: 'ng2viewer',
      component: Ng2PdfViewerComponent,
      title: 'Ng2-pdf-viewer',
    },
  ];
