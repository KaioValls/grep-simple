export interface Repository {
  id: string;
  name: string;
  path: string;
  isActive: boolean;
  branch: string;
  lastCommit: string;
  commits: Commit[];
  stats: {
    filesScanned: string;
    lastScan: string;
  };
  files: FilePreview[];
}

// Interfaces para tipagem dos dados, portadas diretamente do React
export interface Commit {
  message: string;
  author: string;
  date: string;
}

export interface FilePreview {
  path: string;
  type: string;
  status: 'modified' | 'internal' | 'untracked';
}
