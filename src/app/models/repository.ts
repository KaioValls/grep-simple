export interface Repository {
  id: string;
  name: string;
  path: string;
  isActive: boolean;
  gitInfo: GitInfo;
  commits: Commit[];
  scanStats: {
    filesScanned: string;
    lastScan: string;
  };
  files: FilePreview[];
}

// Interfaces para tipagem dos dados, portadas diretamente do React
export interface Commit {
  id: number;
  message: string;
  author: string;
  date: string;
}

export interface FilePreview {
  path: string;
  type: string;
  status: 'modified' | 'internal' | 'untracked';
}

export interface GitInfo {
  currentBranch: string;
  lastCommitHash: string;
  remoteUrl: string;
}
