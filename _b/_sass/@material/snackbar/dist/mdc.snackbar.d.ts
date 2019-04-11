// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../../@material/base/component
//   ../../../@material/base/foundation

declare module '@material/snackbar' {
    /**
      * @license
      * Copyright 2019 Google Inc.
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
    import * as util from '@material/snackbar/util';
    export { util };
    export * from '@material/snackbar/adapter';
    export * from '@material/snackbar/component';
    export * from '@material/snackbar/foundation';
    export * from '@material/snackbar/types';
}

declare module '@material/snackbar/util' {
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
    function announce(ariaEl: Element, labelEl?: Element): void;
    export { announce };
}

declare module '@material/snackbar/adapter' {
    /**
        * Defines the shape of the adapter expected by the foundation.
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCSnackbarAdapter {
            addClass(className: string): void;
            announce(): void;
            notifyClosed(reason: string): void;
            notifyClosing(reason: string): void;
            notifyOpened(): void;
            notifyOpening(): void;
            removeClass(className: string): void;
    }
}

declare module '@material/snackbar/component' {
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
    import { MDCSnackbarFoundation } from '@material/snackbar/foundation';
    import { MDCSnackbarAnnouncerFactory } from '@material/snackbar/types';
    export class MDCSnackbar extends MDCComponent<MDCSnackbarFoundation> {
            static attachTo(root: Element): MDCSnackbar;
            initialize(announcerFactory?: MDCSnackbarAnnouncerFactory): void;
            initialSyncWithDOM(): void;
            destroy(): void;
            open(): void;
            /**
                * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
                *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
                *     client-specific values may also be used if desired.
                */
            close(reason?: string): void;
            getDefaultFoundation(): MDCSnackbarFoundation;
            timeoutMs: number;
            closeOnEscape: boolean;
            readonly isOpen: boolean;
            labelText: string;
            actionButtonText: string;
    }
}

declare module '@material/snackbar/foundation' {
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
    import { MDCFoundation } from '@material/base/foundation';
    import { MDCSnackbarAdapter } from '@material/snackbar/adapter';
    export class MDCSnackbarFoundation extends MDCFoundation<MDCSnackbarAdapter> {
            static readonly cssClasses: {
                    CLOSING: string;
                    OPEN: string;
                    OPENING: string;
            };
            static readonly strings: {
                    ACTION_SELECTOR: string;
                    ARIA_LIVE_LABEL_TEXT_ATTR: string;
                    CLOSED_EVENT: string;
                    CLOSING_EVENT: string;
                    DISMISS_SELECTOR: string;
                    LABEL_SELECTOR: string;
                    OPENED_EVENT: string;
                    OPENING_EVENT: string;
                    REASON_ACTION: string;
                    REASON_DISMISS: string;
                    SURFACE_SELECTOR: string;
            };
            static readonly numbers: {
                    DEFAULT_AUTO_DISMISS_TIMEOUT_MS: number;
                    MAX_AUTO_DISMISS_TIMEOUT_MS: number;
                    MIN_AUTO_DISMISS_TIMEOUT_MS: number;
                    SNACKBAR_ANIMATION_CLOSE_TIME_MS: number;
                    SNACKBAR_ANIMATION_OPEN_TIME_MS: number;
                    ARIA_LIVE_DELAY_MS: number;
            };
            static readonly defaultAdapter: MDCSnackbarAdapter;
            constructor(adapter?: Partial<MDCSnackbarAdapter>);
            destroy(): void;
            open(): void;
            /**
                * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
                *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
                *     client-specific values may also be used if desired.
                */
            close(reason?: string): void;
            isOpen(): boolean;
            getTimeoutMs(): number;
            setTimeoutMs(timeoutMs: number): void;
            getCloseOnEscape(): boolean;
            setCloseOnEscape(closeOnEscape: boolean): void;
            handleKeyDown(evt: KeyboardEvent): void;
            handleActionButtonClick(_evt: MouseEvent): void;
            handleActionIconClick(_evt: MouseEvent): void;
    }
    export default MDCSnackbarFoundation;
}

declare module '@material/snackbar/types' {
    /**
      * @license
      * Copyright 2019 Google Inc.
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
    export type MDCSnackbarAnnouncer = (ariaEl: Element, labelEl?: Element) => void;
    export type MDCSnackbarAnnouncerFactory = () => MDCSnackbarAnnouncer;
    export interface MDCSnackbarCloseEventDetail {
        reason?: string;
    }
    export interface MDCSnackbarCloseEvent extends Event {
        readonly detail: MDCSnackbarCloseEventDetail;
    }
}

