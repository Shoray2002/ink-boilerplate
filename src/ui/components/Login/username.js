import React from 'react';
import {Text, Color} from 'ink';
import TextInput from 'ink-text-input';

export default function Username({username, setUsername}) {
    return (
        <Text>
        <Color green>Username: </Color>
        <TextInput
            value={username}
            onChange={setUsername}
            onSubmit={() => {console.log(username)}}
            showCursor={false}
        />
        </Text>
    );
    }

