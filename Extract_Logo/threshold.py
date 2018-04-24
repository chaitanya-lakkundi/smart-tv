from PIL import Image
import numpy as np

def convert_to_bw(img_filename):
    col = Image.open(img_filename)
    gray = col.convert('L')
   
   # Let numpy do the heavy lifting for converting pixels to pure black or white
    bw = np.asarray(gray).copy()
   
   # Pixel range is 0...255, 256/2 = 128
    bw[bw < 128] = 0    # Black
    bw[bw >= 128] = 255 # White
   
   # Now we put it back in Pillow/PIL land
    imfile = Image.fromarray(bw)
    imfile.save(img_filename+".bw.png")
   # gray_img = Image.fromarray(np.asarray(gray))
   # imfile.show()
   # gray_img.show()

if __name__ == "__main__":
    from sys import argv
    for img_filename in argv[1:]:
        convert_to_bw(img_filename)
