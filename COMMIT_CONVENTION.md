# Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.
All commit messages must follow this format:

```text
<type>: <description>
```

## Allowed Types

| Type         | Description                                                                                            | Example                           |
| :----------- | :----------------------------------------------------------------------------------------------------- | :-------------------------------- |
| **feat**     | A new feature                                                                                          | `feat: add dark mode`             |
| **fix**      | A bug fix                                                                                              | `fix: resolve login crash`        |
| **docs**     | Documentation only changes                                                                             | `docs: update readme`             |
| **style**    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) | `style: fix eslint errors`        |
| **refactor** | A code change that neither fixes a bug nor adds a feature                                              | `refactor: simplify auth logic`   |
| **perf**     | A code change that improves performance                                                                | `perf: optimize image loading`    |
| **test**     | Adding missing tests or correcting existing tests                                                      | `test: add unit tests for header` |
| **chore**    | Changes to the build process or auxiliary tools and libraries such as documentation generation         | `chore: update dependencies`      |

## Rules

1. **Lower case**: The type must be in lower case.
2. **Colon and Space**: There must be a colon and a space after the type.
3. **Short Description**: The description should be short and concise.
