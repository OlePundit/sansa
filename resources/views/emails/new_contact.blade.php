<!DOCTYPE html>
<html>
<head>
    <title>You Just Received a New Contact!</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.3/umd/popper.min.js"></script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <style>
        h1{
            background:#202020;
            color:#fff;
            text-align:center;
            padding: 10px;
            margin-bottom:30px;

        }
        p{
            border-bottom:1px solid #aeaeae;
            padding-bottom: 7px;
        }
        h5{
            font-size:17px;
        }
        h4{
            font-size:17px;
            margin-bottom:20px;

        }
        a{
            width: fit-content;
            float: left;
            font-size: 16px;
            color: #e63534;
            text-align: center;
            padding: 5px 12px;
            border-radius: 20px;
            border: 1px solid #E1C17E;
            font-weight: 600;
            margin-bottom:15px;
        }
        a:hover{
            color: #000!important;
            background-color: #E1C17E;
        }
        a button{
            background:none;
            border:none;
        }

    </style>
</head>
<body>
    <div class="container">

        <div class="row justify-content-center">
            <div class="py-5 col-lg-8 col-md-12">
                <h1>Congratulations</h1>
                <h4>A new prospective customer just reached out!</h4>

                <p>Name: {{ $contact->name }}</p>
                <p>Email: {{ $contact->email }}</p>
                <p>Message: {{ $contact->message }}</p>
                <p>Submitted at: {{ $contact->created_at }}</p>
                </br>
            </div>
        </div>
    </div>

</body>
</html>
