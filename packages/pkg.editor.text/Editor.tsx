/* eslint-disable default-case */
import 'pkg.config.muidts';

// Import React dependencies.
import React, { useCallback, useState } from 'react';
// Import the Slate editor factory.
import { Editor, createEditor, Descendant, Transforms, Text } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';
import { Stack, Box } from '@mui/material';

const CodeElement = ({ attributes, children }: { attributes: object; children: any }) => (
  <pre {...attributes}>
    <code>{children}</code>
  </pre>
);

const DefaultElement = ({ attributes, children }: { attributes: object; children: any }) => (
  <p {...attributes}>{children}</p>
);

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
  {
    type: 'code',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

// Define a React component to render leaves with bold text.
const Leaf = ({ attributes, leaf, children }: { attributes: object; children: any; leaf: any }) => (
  <span {...attributes} style={{ fontWeight: leaf.bold ? 'bold' : 'normal' }}>
    {children}
  </span>
);

export const ContentEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props: any) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  // Define a leaf rendering function that is memoized with `useCallback`.
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        height: '100vh',
        width: '100%',
        p: '8px 16px',
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1060px',
        }}
      >
        <Slate editor={editor} value={initialValue}>
          <Editable
            renderElement={renderElement}
            // Pass in the `renderLeaf` function.
            renderLeaf={renderLeaf}
            onKeyDown={(event) => {
              if (!event.ctrlKey) {
                return;
              }

              switch (event.key) {
                // When "`" is pressed, keep our existing code block logic.
                case '`': {
                  event.preventDefault();
                  const [match] = Editor.nodes(editor, {
                    match: (n: any) => n.type === 'code',
                  });
                  Transforms.setNodes(
                    editor,
                    { type: match ? 'paragraph' : 'code' },
                    { match: (n: any) => Editor.isBlock(editor, n) },
                  );
                  break;
                }

                // When "B" is pressed, bold the text in the selection.
                case 'b': {
                  event.preventDefault();
                  Transforms.setNodes(
                    editor,
                    { bold: true },
                    // Apply it to text nodes, and split the text node up if the
                    // selection is overlapping only part of it.
                    { match: (n) => Text.isText(n), split: true },
                  );
                  break;
                }
              }
            }}
          />
        </Slate>
      </Box>
    </Stack>
  );
};
