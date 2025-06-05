# ChainBrain Agent Proto

TypeScript/JavaScript client library for ChainBrain Agent Service protobuf definitions.

## Installation

```bash
npm install @crashteam/chainbrain-agent-proto
```

## Usage

### Basic Usage

```typescript
import {
  ProcessMessageRequest,
  MessageContext,
  MessageContext_MessageType,
  AgentOptions,
  AgentServiceDefinition,
} from '@crashteam/chainbrain-agent-proto';

// Create a message request
const request: ProcessMessageRequest = {
  userId: 'user-123',
  conversationId: 'conv-456',
  message: 'Hello, how can you help me?',
  context: {
    messageType: MessageContext_MessageType.TEXT,
    attachments: [],
    metadata: {},
  },
  options: {
    autoModelSelection: true,
    preferredProvider: 'openai',
    preferredModel: 'gpt-4',
    temperature: 0.7,
    maxTokens: 2048,
    enableTools: true,
    allowedTools: ['search', 'calculator'],
  },
};
```

### Using with nice-grpc

```typescript
import { createChannel, createClient } from 'nice-grpc';
import { AgentServiceDefinition } from '@crashteam/chainbrain-agent-proto';

const channel = createChannel('localhost:50051');
const agentClient = createClient(AgentServiceDefinition, channel);

async function processMessage() {
  try {
    const response = await agentClient.processMessage(request);
    console.log('Agent response:', response.response);
  } catch (error) {
    console.error('Error processing message:', error);
  }
}

// Streaming messages
async function streamMessage() {
  try {
    for await (const chunk of agentClient.streamMessage(request)) {
      console.log('Chunk:', chunk.content);
    }
  } catch (error) {
    console.error('Error streaming message:', error);
  }
}
```

## Available Types

- `ProcessMessageRequest` - Request for processing a message
- `ProcessMessageResponse` - Response from message processing
- `MessageChunk` - Streaming message chunk
- `MessageContext` - Context information for messages
- `AgentOptions` - Configuration options for the agent
- `ModelInfo` - Information about the model used
- `ToolExecution` - Details about tool execution
- `TokenUsage` - Token usage statistics
- `GetConversationHistoryRequest` - Request for conversation history
- `GetConversationHistoryResponse` - Response with conversation history
- `Message` - Individual message in conversation history

## Service Definition

The package exports `AgentServiceDefinition` which can be used with gRPC clients like nice-grpc.

## Development

This package is automatically generated from protobuf definitions. To build from source:

```bash
npm install
npm run build
```

## License

MIT