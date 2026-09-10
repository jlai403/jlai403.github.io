export interface StackItem {
  name: string;
  category: string;
  description: string;
  icon?: string;
}

export const stackItems: StackItem[] = [
  { name: 'typescript', category: 'languages', description: 'main language', icon: 'https://www.google.com/s2/favicons?domain=typescriptlang.org&sz=32' },
  { name: 'deno', category: 'languages', description: 'modern runtime', icon: 'https://www.google.com/s2/favicons?domain=deno.com&sz=32' },
  { name: 'bun', category: 'languages', description: 'fast js runtime', icon: 'https://www.google.com/s2/favicons?domain=bun.sh&sz=32' },
  { name: 'python', category: 'languages', description: 'scripting & backend', icon: 'https://www.google.com/s2/favicons?domain=python.org&sz=32' },
  { name: 'vuejs', category: 'languages', description: 'frontend choices', icon: 'https://www.google.com/s2/favicons?domain=vuejs.org&sz=32' },
  { name: 'tailwindcss', category: 'languages', description: 'styling', icon: 'https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=32' },
  { name: 'aws', category: 'infrastructure', description: 'cloud provider', icon: 'https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=32' },
  { name: 'cloudflare', category: 'infrastructure', description: 'zero trust', icon: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=32' },
  { name: 'tailscale', category: 'infrastructure', description: 'wireguard vpn', icon: 'https://www.google.com/s2/favicons?domain=tailscale.com&sz=32' },
  { name: 'osx', category: 'os', description: 'macos', icon: 'https://www.google.com/s2/favicons?domain=apple.com&sz=32' },
  { name: 'omarchy', category: 'os', description: 'arch linux', icon: 'https://www.google.com/s2/favicons?domain=omarchy.org&sz=32' },
  { name: 'proxmox', category: 'os', description: 'hypervisor', icon: 'https://www.google.com/s2/favicons?domain=proxmox.com&sz=32' },
  { name: 'terraform', category: 'infrastructure', description: 'iac', icon: 'https://www.google.com/s2/favicons?domain=terraform.io&sz=32' },
  { name: 'docker', category: 'infrastructure', description: 'containerization', icon: 'https://www.google.com/s2/favicons?domain=docker.com&sz=32' },
  { name: 'mongodb', category: 'databases', description: 'nosql store', icon: 'https://www.google.com/s2/favicons?domain=mongodb.com&sz=32' },
  { name: 'sqlite', category: 'databases', description: 'embedded database', icon: 'https://www.google.com/s2/favicons?domain=sqlite.org&sz=32' },
  { name: 'duckdb', category: 'databases', description: 'analytical database', icon: 'https://www.google.com/s2/favicons?domain=duckdb.org&sz=32' },
  { name: 'zed', category: 'apps', description: 'primary editor', icon: 'https://www.google.com/s2/favicons?domain=zed.dev&sz=32' },
  { name: 'zen browser', category: 'apps', description: 'primary browser', icon: 'https://www.google.com/s2/favicons?domain=zen-browser.app&sz=32' },
  { name: 'raycast', category: 'apps', description: 'productivity', icon: 'https://www.google.com/s2/favicons?domain=raycast.com&sz=32' },
  { name: 'aerospace', category: 'apps', description: 'tiling window manager', icon: 'https://www.google.com/s2/favicons?domain=nikitabobko.github.io/AeroSpace/guide&sz=32' },
  { name: 'stats menu', category: 'apps', description: 'system monitor', icon: 'https://raw.githubusercontent.com/exelban/stats/master/Stats/Supporting%20Files/Assets.xcassets/AppIcon.appiconset/icon_256x256.png' },
  { name: 'doll', category: 'apps', description: 'menu bar vibes', icon: 'https://raw.githubusercontent.com/xiaogdgenuine/Doll/refs/heads/main/Doll/Assets.xcassets/AppIcon.appiconset/32.png' },
  { name: '1password', category: 'apps', description: 'security', icon: 'https://www.google.com/s2/favicons?domain=1password.com&sz=32' },
  { name: 'obsidian', category: 'apps', description: 'knowledge base', icon: 'https://www.google.com/s2/favicons?domain=obsidian.md&sz=32' },
  { name: 'notion', category: 'apps', description: 'documentation', icon: 'https://www.google.com/s2/favicons?domain=notion.so&sz=32' },
  { name: 'harper', category: 'apps', description: 'grammar checker', icon: 'https://www.google.com/s2/favicons?domain=writewithharper.com&sz=32' },
  { name: 'ghostty', category: 'terminal', description: 'terminal emulator', icon: 'https://www.google.com/s2/favicons?domain=ghostty.org&sz=32' },
  { name: 'tmux', category: 'terminal', description: 'terminal multiplexer', icon: 'https://raw.githubusercontent.com/tmux/tmux/refs/heads/master/logo/favicon.ico' },
  { name: 'starship', category: 'terminal', description: 'cross-shell prompt', icon: 'https://www.google.com/s2/favicons?domain=starship.rs&sz=32' },
  { name: 'opencode', category: 'terminal', description: 'ai coding agent', icon: 'https://www.google.com/s2/favicons?domain=opencode.ai&sz=32' },
  { name: 'herdr', category: 'terminal', description: 'agent multiplexer', icon: 'https://www.google.com/s2/favicons?domain=herdr.dev&sz=32' },
];

export type StackGroup = Record<string, StackItem[]>;

export function getGroupedStack(): StackGroup {
  const groups: StackGroup = {
    'operating systems': [],
    'languages / frontend': [],
    'infrastructure': [],
    'databases': [],
    'software': [],
    'terminal / workflow': [],
  };

  for (const item of stackItems) {
    if (item.category === 'os') groups['operating systems'].push(item);
    else if (item.category === 'languages') groups['languages / frontend'].push(item);
    else if (item.category === 'infrastructure') groups['infrastructure'].push(item);
    else if (item.category === 'databases') groups['databases'].push(item);
    else if (item.category === 'apps') groups['software'].push(item);
    else if (item.category === 'terminal') groups['terminal / workflow'].push(item);
  }

  return groups;
}
