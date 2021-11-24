import React from 'react';

import {Editor, EditorProvider, Renderer} from '@dooub/mobile-editor';
import {Platform, ScrollView} from 'react-native';

const markdown = `

# Heading 1


{{Image|width=200&height=200|id=ai618cb9ea99b653b84b0b0838,ai618cb9ea99b653b84b0b0839}}


# {orange}(T){red}(e){green}(s){red}(t)
`;

const source =
  Platform.OS === 'ios'
    ? require('./mobile-editor.html')
    : {uri: 'file:///android_asset/mobile-editor.html'};

const App = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <EditorProvider>
        <Editor data={markdown} source={source} />
        {/* <Renderer markdown={markdown} /> */}
      </EditorProvider>
    </ScrollView>
  );
};

export default App;
