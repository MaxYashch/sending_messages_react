function Main() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="text">
                    <ul className="row button-list">
                        <li className="col-6">
                            <a
                                href="/create"
                                type=" button"
                                className="btn btn-primary"
                            >
                                Create note
                            </a>
                        </li>
                        <li className="col-6">
                            <a
                                href="/note"
                                type=" button"
                                className="btn btn-primary"
                            >
                                Look at note
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text">
                    <p>
                        <b>ShareNotes</b> – sending messages service. Create
                        note, send it and your friend can look at it. After
                        watching hte note will be deleted (after 15 minutes
                        after creation).
                    </p>
                    <p>How to create note? </p>
                    <ul>
                        <li>Click the link</li>
                        <li>Enter text and click Create</li>
                        <li>Send generated link to addresser!</li>
                    </ul>
                    <p>
                        How to read the note? Click to URL or just enter address
                        here.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
