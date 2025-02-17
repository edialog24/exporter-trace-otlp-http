/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { OTLPExporterNodeBase } from '@opentelemetry/otlp-exporter-base';
import { VERSION } from '../../version';
import { JsonTraceSerializer } from '@opentelemetry/otlp-transformer';
const USER_AGENT = {
    'User-Agent': `OTel-OTLP-Exporter-JavaScript/${VERSION}`,
};
/**
 * Collector Trace Exporter for Node
 */
export class OTLPTraceExporter extends OTLPExporterNodeBase {
    constructor(config = {}) {
        super(config, JsonTraceSerializer, Object.assign(Object.assign({}, USER_AGENT), { 'Content-Type': 'application/json' }), 'TRACES', 'v1/traces');
    }
}
//# sourceMappingURL=OTLPTraceExporter.js.map