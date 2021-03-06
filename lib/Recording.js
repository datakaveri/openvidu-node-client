"use strict";
/*
 * (C) Copyright 2017-2020 OpenVidu (https://openvidu.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var RecordingLayout_1 = require("./RecordingLayout");
/**
 * See [[OpenVidu.startRecording]]
 */
var Recording = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    /**
     * @hidden
     */
    function Recording(json) {
        /**
         * Size of the recording in bytes (0 until the recording is stopped)
         */
        this.size = 0;
        /**
         * Duration of the recording in seconds (0 until the recording is stopped)
         */
        this.duration = 0;
        this.id = json['id'];
        this.sessionId = json['sessionId'];
        this.createdAt = json['createdAt'];
        this.size = json['size'];
        this.duration = json['duration'];
        this.url = json['url'];
        this.status = json['status'];
        this.properties = {
            name: !!(json['name']) ? json['name'] : this.id,
            outputMode: !!(json['outputMode']) ? json['outputMode'] : Recording.OutputMode.COMPOSED,
            hasAudio: !!(json['hasAudio']),
            hasVideo: !!json['hasVideo']
        };
        if (this.properties.outputMode.toString() === Recording.OutputMode[Recording.OutputMode.COMPOSED]
            || this.properties.outputMode.toString() === Recording.OutputMode[Recording.OutputMode.COMPOSED_QUICK_START]) {
            this.properties.resolution = !!(json['resolution']) ? json['resolution'] : '1920x1080';
            this.properties.recordingLayout = !!(json['recordingLayout']) ? json['recordingLayout'] : RecordingLayout_1.RecordingLayout.BEST_FIT;
            if (this.properties.recordingLayout.toString() === RecordingLayout_1.RecordingLayout[RecordingLayout_1.RecordingLayout.CUSTOM]) {
                this.properties.customLayout = json['customLayout'];
            }
        }
    }
    return Recording;
}());
exports.Recording = Recording;
(function (Recording) {
    /**
     * See [[Recording.status]]
     */
    var Status;
    (function (Status) {
        /**
         * The recording is starting (cannot be stopped). Some recording may not go
         * through this status and directly reach "started" status
         */
        Status["starting"] = "starting";
        /**
         * The recording has started and is going on
         */
        Status["started"] = "started";
        /**
         * The recording has stopped and is being processed. At some point it will reach
         * "ready" status
         */
        Status["stopped"] = "stopped";
        /**
         * The recording has finished being processed and is available for download through
         * property [[Recording.url]]
         */
        Status["ready"] = "ready";
        /**
         * The recording has failed. This status may be reached from "starting",
         * "started" and "stopped" status
         */
        Status["failed"] = "failed";
    })(Status = Recording.Status || (Recording.Status = {}));
    /**
     * See [[RecordingProperties.outputMode]]
     */
    var OutputMode;
    (function (OutputMode) {
        /**
         * Record all streams in a grid layout in a single archive
         */
        OutputMode["COMPOSED"] = "COMPOSED";
        /**
         * Works the same way as COMPOSED mode, but the necessary recorder
         * service module will start some time in advance and won't be terminated
         * once a specific session recording has ended. This module will remain
         * up and running as long as the session remains active.
         *
         * - **Pros vs COMPOSED**: the process of starting the recording will be noticeably
         * faster. This can be very useful in use cases where a session needs to be
         * recorded multiple times over time, when a better response time is usually
         * desirable.

         * - **Cons vs COMPOSED**: for every session initialized with COMPOSED_QUICK_START
         * recording output mode, extra CPU power will be required in OpenVidu Server.
         * The recording module will be continuously rendering all of the streams being
         * published to the session even when the session is not being recorded. And that
         * is for every session configured with COMPOSED_QUICK_START.
         */
        OutputMode["COMPOSED_QUICK_START"] = "COMPOSED_QUICK_START";
        /**
         * Record each stream individually
         */
        OutputMode["INDIVIDUAL"] = "INDIVIDUAL";
    })(OutputMode = Recording.OutputMode || (Recording.OutputMode = {}));
})(Recording = exports.Recording || (exports.Recording = {}));
exports.Recording = Recording;
//# sourceMappingURL=Recording.js.map