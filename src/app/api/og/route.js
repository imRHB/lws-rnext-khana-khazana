import { ImageResponse } from "next/og";

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: "#FAFAFA",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                Khana Khazana
            </div>
        ),
        {
            width: 1200,
            height: 600,
        }
    );
}
