import Anthropic from "@anthropic-ai/sdk";

interface DevAgentConfig {
  name: string;
  role: string;
  description: string;
}

export class DevAgent {
  private client: Anthropic;
  private config: DevAgentConfig;

  constructor(config: DevAgentConfig) {
    this.client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
    this.config = config;
  }

  async generateCode(prompt: string): Promise<string> {
    const message = await this.client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are ${this.config.name}, a ${this.config.role}. ${this.config.description}\n\nTask: ${prompt}`,
        },
      ],
    });

    return message.content[0].type === "text" ? message.content[0].text : "";
  }

  async analyzeCode(code: string): Promise<string> {
    const message = await this.client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are ${this.config.name}, a ${this.config.role}. Analyze the following code:\n\n\`\`\`\n${code}\n\`\`\``,
        },
      ],
    });

    return message.content[0].type === "text" ? message.content[0].text : "";
  }

  getConfig() {
    return this.config;
  }
}
