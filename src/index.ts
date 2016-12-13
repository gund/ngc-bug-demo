import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
    imports: [CommonModule]
})
export class TestModule {

	static forRoot(): ModuleWithProviders {
        return {
            ngModule: TestModule, // <--- This causes error, with getTestModule() works fine
            providers: [
                // Some providers
            ]
        }
    }

}

function getTestModule() {
    return TestModule;
}
