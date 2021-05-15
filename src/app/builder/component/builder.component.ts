import { RegionsService } from './../services/regions.service';
import { Component, ViewEncapsulation, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'builder-root',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class BuilderComponent {
    title = 'isd-builder';
    modalRef: BsModalRef;
    constructor(
        private modalService: BsModalService,
        protected RegionsService: RegionsService
    ) {

    }

    openResetModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    resetRegions() {
        this.RegionsService.resetCustomRegions();
        window.location.reload();
        this.modalRef.hide();
    }
}
