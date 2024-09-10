# Performance Optimizations

## Techniques Used to Improve Performance

1. **Minification of CSS/JS**:
   - CSS and JavaScript files were minified to reduce file size and load time.

2. **Lazy Loading**:
   - Images are lazy-loaded to improve the initial page load time:
     ```html
     <img src="image.jpg" loading="lazy" alt="Example image">
     ```

3. **Compression**:
   - All assets were compressed before uploading to IPFS to ensure faster delivery.

4. **Caching**:
   - We ensured static assets are cached via IPFS, reducing the need for repeated downloads.

5. **Optimized Media**:
   - Images were resized and compressed to balance quality with performance.

6. **CDN for IPFS Gateway**:
   - When accessed via an IPFS gateway, the project uses a CDN-backed gateway for low latency.