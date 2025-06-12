# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| 1.0.x   | :x:                |

## Security Updates

This project has been migrated from Create React App to Vite to eliminate webpack-related vulnerabilities:

### Resolved Vulnerabilities
- ✅ Cross-realm object access in Webpack 5
- ✅ Prototype pollution in webpack loader-utils
- ✅ Prototype Pollution in JSON5 via Parse Method
- ✅ loader-utils ReDoS vulnerabilities
- ✅ minimatch ReDoS vulnerability

### Security Measures
- **Vite Build System**: No webpack dependencies
- **Latest Dependencies**: All packages updated to secure versions
- **Security Overrides**: Force secure versions of transitive dependencies
- **Regular Audits**: Automated security scanning

## Reporting a Vulnerability

If you discover a security vulnerability, please email security@fendishatech.com

## Security Best Practices

1. **Dependencies**: Run `npm audit` regularly
2. **Updates**: Keep dependencies updated
3. **Environment**: Use environment variables for sensitive data
4. **HTTPS**: Always use HTTPS in production
5. **CSP**: Implement Content Security Policy headers
