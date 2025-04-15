# Contributing to GulpJS Plugins

This guide explains how to contribute a new plugin to the GulpJS Plugins repository.

## Adding a New Plugin

### 1. Setup Development Environment

- Create a new branch for your plugin:
  ```sh
  git checkout -b plugins/<plugin-name>
  ```

> [!TIP]
> `<plugin-name>` should follow the `gulp-*` naming convention.

### 2. Create Plugin Structure

- Copy an existing plugin template from the `plugins/` folder:
  ```sh
  cp -r plugins/gulp-sharp/* plugins/<plugin-name>
  ```

- Install dependencies:
  ```sh
  pnpm install
  ```

### 3. Configure Plugin

- Update the plugin's `package.json`:
  - Set appropriate name (should follow `gulp-*` convention)
  - Update description
  - Add relevant keywords
  - Set correct version (starting with 1.0.0)
  - Update author information

- Update the plugin's README.md:
  - Add clear installation instructions
  - Document all available options
  - Include usage examples
  - Add contribution guidelines
  - Include license information

### 4. Add to Release Configuration

Add your plugin to the [`release-please` configuration](release-please-config.json) under the `packages` field:
```json
{
  "packages": {
    "plugins/gulp-sharp": {},
    "plugins/<plugin-name>": {} // Add your plugin here
  }
}
```

### 5. Update Main Documentation

Add a reference to your new plugin in the main README.md:
```md
## Plugins

| Plugin                                          | Description          |
| ----------------------------------------------- | -------------------- |
| [<Plugin Title>](plugins/<plugin-name>/#readme) | <Plugin Description> |
```

### 6. Development Guidelines

- Follow the existing code style and patterns
- Write tests for your plugin
- Ensure all tests pass before submitting
- Document all public APIs
- Keep dependencies up to date
- Follow semantic versioning

### 7. Testing Requirements

- All plugins must include unit tests
- Test coverage should be maintained
- Tests should run on all supported Node.js versions
- Include example usage in tests

### 8. Code Style

- Use ES6+ features where appropriate
- Follow the project's ESLint configuration
- Use meaningful variable and function names
- Include JSDoc comments for public APIs

### 9. Submitting Changes

- Ensure all tests pass
- Update documentation as needed
- Create a pull request with a clear description
- Reference any related issues
- Be responsive to review comments

## Questions?

If you have any questions about contributing, please [open an issue](https://github.com/forwardsoftware/gulp-plugins/issues/new) in the repository.
