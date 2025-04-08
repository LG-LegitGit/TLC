function css(name) {
  return "rgb(" + getComputedStyle(document.documentElement).getPropertyValue(name).trim() + ")";
}

Chart.defaults.font.size = 14;

// Set up default colors for the chart using the CSS variables
Chart.defaults.backgroundColor = css("--color-primary-300");  // Light cyan
Chart.defaults.elements.point.borderColor = css("--color-primary-400");  // Medium cyan
Chart.defaults.elements.bar.borderColor = css("--color-primary-500");  // Dark cyan
Chart.defaults.elements.bar.borderWidth = 2; // Thicker border
Chart.defaults.elements.line.borderColor = css("--color-primary-400");  // Lighter cyan for line borders
Chart.defaults.elements.arc.backgroundColor = css("--color-primary-200");  // Light cyan background for arcs
Chart.defaults.elements.arc.borderColor = css("--color-primary-500");  // Dark cyan for arc borders
Chart.defaults.elements.arc.borderWidth = 2;  // Thicker arc borders

// Extra customizations for better visibility in both themes
Chart.defaults.elements.line.backgroundColor = css("--color-primary-200");  // Lighter background for line charts
Chart.defaults.elements.point.radius = 6;  // Larger data point radius for better visibility
Chart.defaults.elements.point.backgroundColor = css("--color-primary-500");  // Darker color for points
