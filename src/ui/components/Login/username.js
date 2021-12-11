import React from 'react';
import {Text, Color} from 'ink';
import TextInput from 'ink-text-input';

export default function Username({username, setUsername,setStatus}) {
    return (
        <>
        <Text>
        <Color red>Username: </Color>
        <TextInput
            value={username}
            onChange={setUsername}
            onSubmit={() => setStatus(true)}
            showCursor={false}
        />
        </Text>
        </>
        
    );
    }

