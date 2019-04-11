/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { MDCComponent } from '@material/base/component';
import { MDCRipple, MDCRippleCapableSurface } from '@material/ripple/index';
import { MDCSwitchFoundation } from './foundation';
export declare class MDCSwitch extends MDCComponent<MDCSwitchFoundation> implements MDCRippleCapableSurface {
    static attachTo(root: HTMLElement): MDCSwitch;
    root_: Element;
    private readonly ripple_;
    private changeHandler_;
    destroy(): void;
    initialSyncWithDOM(): void;
    getDefaultFoundation(): MDCSwitchFoundation;
    readonly ripple: MDCRipple;
    checked: boolean;
    disabled: boolean;
    private createRipple_;
    private readonly nativeControl_;
}
