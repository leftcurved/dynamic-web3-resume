# Responsive Design

## Approach to Mobile-Friendliness

YOU SHOULD DO IT DIRECTLY, it's a headache to revamp everything

1. **Media Queries**:
   - I used CSS media queries to ensure the design adapts to various screen sizes.
   - Example:
     ```css
     @media only screen and (max-width: 600px) {
         body {
             font-size: 14px;
         }
     }
     ```

2. **Flexible Layout**:
   - The design uses flexible units like percentages, `em`, and `rem` to make elements scalable.
   - This ensures the layout adjusts smoothly from desktop to mobile devices.

3. **Touch Optimizations**:
   - Buttons and interactive elements are optimized for touchscreens by increasing their hit area.

4. **Viewport Meta Tag**:
   - The following meta tag is included in the HTML to ensure proper scaling on mobile devices:
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     ```