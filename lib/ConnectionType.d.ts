/**
 * See [[Session.createConnection]]
 */
export declare enum ConnectionType {
    /**
     * WebRTC connection. This is the normal type of Connection for a regular user
     * connecting to a session from an application.
     */
    WEBRTC = "WEBRTC",
    /**
     * IP camera connection. This is the type of Connection used by IP cameras to
     * connect to a session.
     */
    IPCAM = "IPCAM"
}
