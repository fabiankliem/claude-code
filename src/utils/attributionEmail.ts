const MODEL_EMAIL_MAP: Array<{ keywords: string[]; email: string }> = [
  { keywords: ['claude'], email: 'noreply@anthropic.com' },
  // 由于找不到他们的邮箱和头像, 所以改为了使用我们的邮箱先记录, 后续官方有 github 能用的邮箱可以替换
  // github 组织是不能用 co author 的
  {
    keywords: ['gpt', 'dall-e', 'o1-', 'o3-', 'o4-'],
    email: 'openai@fagent.local',
  },
  { keywords: ['gemini'], email: 'google-gemini@fagent.local' },
  { keywords: ['grok'], email: 'xai-org@fagent.local' },
  { keywords: ['glm'], email: 'zai-org@fagent.local' },
  { keywords: ['deepseek'], email: 'deepseek-ai@fagent.local' },
  { keywords: ['qwen'], email: 'QwenLM@fagent.local' },
  { keywords: ['minimax'], email: 'MiniMax-AI@fagent.local' },
  { keywords: ['mimo'], email: 'XiaomiMiMo@fagent.local' },
  { keywords: ['kimi'], email: 'MoonshotAI@fagent.local' },
]

export function getAttributionEmail(modelName: string): string {
  const lower = modelName.toLowerCase()
  for (const { keywords, email } of MODEL_EMAIL_MAP) {
    if (keywords.some(kw => lower.includes(kw))) {
      return email
    }
  }
  return 'noreply@anthropic.com'
}
