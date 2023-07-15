/*
 * @Author: kukuzhilv 1099273256@qq.com
 * @Date: 2023-07-12 15:04:14
 * @LastEditors: kukuzhilv 1099273256@qq.com
 * @LastEditTime: 2023-07-12 15:04:51
 * @FilePath: \front\src\utils\require.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** vite的特殊性, 需要处理图片 */
export const require = (imgPath: string) => {
    try {
        const handlePath = imgPath.replace('@', '..');
        // https://vitejs.cn/guide/assets.html#the-public-directory
        return new URL(handlePath, import.meta.url).href;
    } catch (error) {
        console.warn(error);
    }
};
  
  