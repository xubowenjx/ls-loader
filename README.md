# ls-loader

此 loader 适用于 doc 转 markdwon 后

doc 文件中存在文档引用的情况
默认表达式为

```markdown
[描述](文档路径/文档名称.doc|docx#章节)
```

文档可以是`doc`和`docx`,文档路径不是必须的文档名称也不是必须的，如果只是链接到本文档的某一个章节：

```markdown
[描述](#章节)
```
