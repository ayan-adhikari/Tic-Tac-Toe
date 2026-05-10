import os
import sys
import webview

app_name = "Tic Tac Toe"

def resource_path(relative_path):
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, relative_path)
    return os.path.join(os.path.dirname(os.path.abspath(__file__)), relative_path)

def main():
    index_path = resource_path("index.html")
    url = f"file:///{index_path}"

    webview.create_window(app_name, url, width=800, height=600, resizable=True)
    webview.start()

if __name__ == "__main__":
    main()