// ******************************************************************************
// Copyright 2024 TypeFox GmbH
// This program and the accompanying materials are made available under the
// terms of the MIT License, which is available in the project root.
// ******************************************************************************

import { injectable } from "inversify";
import { JsonMessageEncoding, MessageEncoding } from "open-collaboration-rpc";
import { LOGGER } from "./collaboration-server";

@injectable()
export class EncodingProvider {

    getEncoding(encoding: string): MessageEncoding {
        switch (encoding) {
            case 'json': return JsonMessageEncoding;
            default: throw LOGGER.logAndCreateError({ message: `Unsupported encoding: ${encoding}` });
        }
    }

}
