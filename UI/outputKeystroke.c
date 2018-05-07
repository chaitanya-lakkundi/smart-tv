#include <X11/Xlib.h>
#include <X11/keysym.h>
#include <X11/extensions/XTest.h>
#include <X11/XKBlib.h>
#include <string.h>

void outputKeystroke(int key) {
	Display *display;
	display = XOpenDisplay(NULL);

	XTestFakeKeyEvent(display, key, True, 0);
    XTestFakeKeyEvent(display, key, False,0);
    XFlush(display);
    XCloseDisplay(display);
}

int main(int argc, char *argv[])
{
	Display *display;
	display = XOpenDisplay(NULL);

	int key;
	switch(argv[1][0]) {
		case '1':
			key = XK_Up;
			break;
		case '2':
			key = XK_Down;
			break;
		case '3':
			key = XK_Right;
			break;
		case '4':
			key = XK_Left;
			break;
		case '5':
			key = XK_Escape;
			break;
		default:
			key = 0;
	}
	if(key) {
		key = XKeysymToKeycode(display, key);
    	outputKeystroke(key);
		return 0;
	}
	return 1;
}
