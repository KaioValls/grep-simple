export interface Repo {
  id: string;
  name: string;
  path: string;
  isActive: boolean;
  gitInfo: GitInfo;
  repoCommits: RepoCommit[];
  scanStats: {
    filesScanned: string;
    lastScan: string;
  };
  files: FilePreview[];
}

// Interfaces para tipagem dos dados, portadas diretamente do React
export interface RepoCommit {
  id: number;
  message: string;
  author: string;
  date: string;
}

export interface FilePreview {
  path: string;
  type: string;
  status: 'modified' | 'internal' | 'added' | 'changed'| 'untracked';
}

export interface GitInfo {
  currentBranch: string;
  lastCommitHash: string;
  remoteUrl: string;
}
