// This automatically grabs every .jpg file in that specific folder
const images = import.meta.glob('../assets/Blue-diamond-villa-img/*.jpg', { eager: true });

// FIX: Changed "export default" to "export const"
export const imageAssets = Object.values(images).map((img) => img.default);