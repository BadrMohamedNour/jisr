type FileType = "folder" | "file"

export interface FileNode {
  type: FileType
  name: string
  meta?: string
  data?: FileNode[]
}

export interface FileExplorerProps {
  data: FileNode
  onRightClick: (name: string, action: string) => void
}
