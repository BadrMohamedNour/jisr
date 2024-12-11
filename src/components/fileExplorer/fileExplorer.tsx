import React, { useState } from "react"

// Types
import { FileExplorerProps, FileNode } from "../../utils/types"

// Style
import style from "./styles/fileExplorer.module.scss"

const FileExplorer: React.FC<FileExplorerProps> = ({ data, onRightClick }) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [selected, setSelected] = useState<string | null>(null)

  const toggleExpand = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const handleRightClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault()
    const action = prompt("Choose an action: copy, delete, rename")
    if (action) {
      onRightClick(name, action)
    }
  }

  const renderTree = (node: FileNode) => {
    const isFolder = node.type === "folder"

    return (
      <div key={node.name} className={`${isFolder ? "folder" : "file"}`}>
        <div
          onClick={() => {
            if (isFolder) toggleExpand(node.name)
            else setSelected(node.name)
          }}
          onContextMenu={(e) => handleRightClick(e, node.name)}
          className={`${isFolder ? "folder" : "file"} ${selected === node.name && "selected"}`}
          style={{}}
        >
          {isFolder ? (expanded[node.name] ? "📂" : "📁") : "📄"} {node.name}
        </div>
        {isFolder && expanded[node.name] && node.data && <div>{node.data.map(renderTree)}</div>}
      </div>
    )
  }

  return <div className={style.fileExplorer}>{renderTree(data)}</div>
}

export default FileExplorer
