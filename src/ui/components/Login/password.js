import React from 'react';
import {Text, Color} from 'ink';
import TextInput from 'ink-text-input';
export default function Password({password, setPassword}) {
    return (
        <Text>
        <Color red>Password: </Color>
        <TextInput
            value={password}
            onChange={setPassword}
            mask= "•"
            onSubmit={() => {}}
            showCursor={false}
        />
        </Text>
    );
    }
