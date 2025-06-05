// Re-export all generated types and services
export * from '../generated/agent';

// Export service definition for easy import
export { AgentServiceDefinition } from '../generated/agent';

// Export commonly used types separately for convenience
export type {
  ProcessMessageRequest,
  ProcessMessageResponse,
  MessageChunk,
  MessageContext,
  MessageContext_MessageType,
  AgentOptions,
  ModelInfo,
  ModelCapabilities,
  ToolExecution,
  TokenUsage,
  ResponseMetadata,
  GetConversationHistoryRequest,
  GetConversationHistoryResponse,
  Message,
  Message_MessageRole,
} from '../generated/agent'; 